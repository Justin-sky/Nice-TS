

Shader "ysj/Character"
{
	Properties
	{
		_MainTex ("Base (RGB)", 2D) = "white" {}

		[Header(Shadow)][Space(5)]
		_ShadowThreshold("ShadowThreshold",float) = 0.2
		_ShadowFade("ShadowFade", float) = 0.1
		_ShadowColor("ShadeColor", Color) = (.2,.2,.2,1)

		[Header(Specular)][Space(5)]
		_Glossiness("Glossiness", float) = 3
		_SpecularRange("SpecularRange", float) = 0.8
		_SpecularColor("SpecularColor", Color) = (.2,.2,.2,1)

		[Header(Metal)][Space(5)]
		_MetaInstensity("MetaInstensity",float) = 0.4
	}
	
	Subshader
	{
		Tags { 
			"RenderPipeline" = "UniversalPipeline"
			"LIGHTMODE" = "UniversalForward"
			"RenderType"="Opaque" 
			"QUEUE" = "Geometry" 
		}

		Pass
		{
	
			HLSLPROGRAM
			#pragma vertex vert
			#pragma fragment frag
				
			#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"

			struct Attributes
			{
				float4 positionOS : POSITION;
				float3 normalOS   : NORMAL;
				float4 color : COLOR;
				float2 uv : TEXCOORD0;

			};
			struct Varyings
			{
				float4 positionCS	: SV_POSITION;
				float2 uv 	: TEXCOORD0;
				float3 posWorld : TEXCOORD2;
                float3 normalDir : TEXCOORD3;
                	
			};
				
			TEXTURE2D(_MainTex); SAMPLER(sampler_MainTex);
			TEXTURE2D(_MatCap); SAMPLER(sampler_MatCap);
				
			CBUFFER_START(UnityPerMaterial)
			float4 _MainTex_ST;
			float _ShadowThreshold;
			float _ShadowFade;
			float4 _ShadowColor;
			float _Glossiness;
			float _SpecularRange;
			float4 _SpecularColor;
			float _MetaInstensity;
			CBUFFER_END

				
			Varyings vert (Attributes v)
			{
				Varyings o;

				float3 positionWS = TransformObjectToWorld(v.positionOS.xyz);
				o.posWorld = positionWS;

				o.positionCS = TransformWorldToHClip (positionWS);
			
				o.uv = TRANSFORM_TEX(v.uv, _MainTex);

				o.normalDir = TransformObjectToWorldNormal(v.normalOS) ;

				return o;
			}


			float4 frag (Varyings i) : SV_Target
			{
					

                float3 viewDirection = normalize(GetCameraPositionWS() - i.posWorld);               		
				float4 mainCol = SAMPLE_TEXTURE2D(_MainTex, sampler_MainTex, i.uv);
				
				
				Light mainLight = GetMainLight();
				float3 worldSpaceLightDir = normalize(mainLight.direction);

				//阴影
				float ndotl = dot(worldSpaceLightDir, i.normalDir);
				float halfLambert = ndotl * .5 + .5;
				
				float shadowStep = saturate(smoothstep(_ShadowThreshold, _ShadowThreshold+_ShadowFade, halfLambert));
				float4 shadowCol =  lerp(_ShadowColor, mainCol, shadowStep);

				//高光
				float3 halfVector = normalize(mainLight.direction + viewDirection);
				float ndoth = dot(i.normalDir, halfVector);

				float specularIntensity = pow(abs(ndoth), _Glossiness);
				float specularRange = step(_SpecularRange, specularIntensity);
				float4 specularCol = specularRange * _SpecularColor;


				//金属
				 float ndotv = dot(i.normalDir, viewDirection);
				 float ndotvv = dot(i.normalDir.xzy, viewDirection.zyx);

				 float2 uvMetal = float2(ndotv, ndotvv);
				 float4 metaCol = SAMPLE_TEXTURE2D(_MainTex, sampler_MainTex, uvMetal);
				 float metaInstensity = pow(metaCol.w, 5)* _MetaInstensity;


				 mainCol = mainCol + mainCol.w * metaInstensity;
				 mainCol = mainCol * shadowCol;
				//mainCol = mainCol +  specularCol*mainCol.w;


				return float4(mainCol.xyz,1);
	
			}
			ENDHLSL
		}
	
		Pass
        {
            Name "ShadowCaster"
            Tags{"LightMode" = "ShadowCaster"}

            ZWrite On
            ZTest LEqual
            Cull[_Cull]

            HLSLPROGRAM
            // Required to compile gles 2.0 with standard srp library
            #pragma prefer_hlslcc gles
            #pragma exclude_renderers d3d11_9x
            #pragma target 2.0

            // -------------------------------------
            // Material Keywords
            #pragma shader_feature _ALPHATEST_ON

            //--------------------------------------
            // GPU Instancing
            #pragma multi_compile_instancing
            #pragma shader_feature _SMOOTHNESS_TEXTURE_ALBEDO_CHANNEL_A

            #pragma vertex ShadowPassVertex
            #pragma fragment ShadowPassFragment

            #include "Packages/com.unity.render-pipelines.universal/Shaders/LitInput.hlsl"
            #include "Packages/com.unity.render-pipelines.universal/Shaders/ShadowCasterPass.hlsl"
            ENDHLSL
        }
		
	}
	

}

