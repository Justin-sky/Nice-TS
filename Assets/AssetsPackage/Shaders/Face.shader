

Shader "ysj/Face"
{
	Properties
	{
		_MainTex ("Base (RGB)", 2D) = "white" {}
		_Color("Color",COLOR) = (1,1,1,1)
		_ShadowThreshold("ShadowThreshold",float) = 0.2
		_ShadowFade("ShadowFade", float) = 0.5
		_ShadowColor("ShadeColor", Color) = (.2,.2,.2,1)
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
			float4 _Color;
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


			half4 frag (Varyings i) : SV_Target
			{
					

                half3 viewDirection = normalize(_WorldSpaceCameraPos.xyz - i.posWorld.xyz);               		
				half4 mainCol = SAMPLE_TEXTURE2D(_MainTex, sampler_MainTex, i.uv);
				
				
				Light mainLight = GetMainLight();
				half3 worldSpaceLightDir = normalize(mainLight.direction);

				//“ı”∞
				half ndotl = dot(worldSpaceLightDir, i.normalDir);
				half halfLambert = ndotl * .5 + .5;
				
				half shadowStep = saturate(smoothstep(_ShadowThreshold, _ShadowThreshold+_ShadowFade, halfLambert));
				mainCol = mainCol * lerp(_ShadowColor*mainCol, mainCol, shadowStep);


				return mainCol * _Color;
	
			}
			ENDHLSL
		}
	
		
		
	}
	

}

