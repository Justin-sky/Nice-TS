// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'

// Simplified Additive Particle shader. Differences from regular Additive Particle one:
// - no Tint color
// - no Smooth particle support
// - no AlphaTest
// - no ColorMask

// replacement of "HOG/Particles/Additive"
// merge GRB and Alpha channel
Shader "HOG/Particles/Additive_RGBA" {
	Properties {
		_MainTex ("Particle RGB Texture", 2D) = "white" {}
		_AlphaTex ("Particle Alpha Texture", 2D) = "white" {}
	}

    SubShader {  
		Tags { "Queue"="Transparent+402" "IgnoreProjector"="True" "RenderType"="Transparent" }
		Blend SrcAlpha One
		Cull Off Lighting Off ZWrite Off Fog { Mode Off }
          
		Pass
		{
			HLSLPROGRAM
			#pragma multi_compile LIGHTMAP_OFF LIGHTMAP_ON
			#pragma vertex vert
			#pragma fragment frag	

			#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

			CBUFFER_START(UnityPerMaterial)
			sampler2D _MainTex;
			sampler2D _AlphaTex;

			float4 _MainTex_ST;
			float4 _AlphaTex_ST;
			uniform half4 _EffectColor;
			CBUFFER_END


			struct Attributes
			{
				float4 positionOS       : POSITION;
				float2 uv               : TEXCOORD0;
				half4 color				: Color;

			};

			struct v2f {
				half4 pos : SV_POSITION;
				half2 uv : TEXCOORD0;
				half4 color : TEXCOORD1;
			};


			v2f vert(Attributes v)
			{
				v2f o;
				o.pos = TransformObjectToHClip(v.positionOS.xyz);
				o.uv.xy = TRANSFORM_TEX(v.uv.xy,_MainTex);
				o.color = v.color;
				return o;
			}

			half4 frag(v2f i) : COLOR
			{
				half3 rgb = tex2D(_MainTex, i.uv.xy);
				half a = tex2D(_AlphaTex, i.uv.xy).a;
				half4 o = half4(rgb, a) * i.color;


				return o;
			}
			ENDHLSL

		}

    }   

}