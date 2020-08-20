// Upgrade NOTE: replaced 'mul(UNITY_MATRIX_MVP,*)' with 'UnityObjectToClipPos(*)'

// Simplified Additive Particle shader. Differences from regular Additive Particle one:
// - no Tint color
// - no Smooth particle support
// - no AlphaTest
// - no ColorMask

// replacement of "HOG/Particles/Additive"
// merge GRB and Alpha channel
Shader "HOG/Particles/Additive_R" {
	Properties{
		_MainTex("Particle RGB Texture", 2D) = "white" {}
		_EffectColor("EffectColor", Color) = (1,1,1,1)
	}

	SubShader{
		Tags {"RenderPipeline" = "UniversalPipeline"   "Queue" = "Transparent+403" "IgnoreProjector" = "True" "RenderType" = "Transparent" }
		Blend SrcAlpha One
		Cull Off Lighting Off ZWrite Off

		Pass
		{
			HLSLPROGRAM
			#pragma multi_compile _ LIGHTMAP_ON
			#pragma vertex vert
			#pragma fragment frag	

			#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

			CBUFFER_START(UnityPerMaterial)
			sampler2D _MainTex;

			float4 _MainTex_ST;
			uniform half4 _EffectColor;
			CBUFFER_END

			struct Attributes
			{
				float4 positionOS       : POSITION;
				float2 uv               : TEXCOORD0;
				half4 color				: Color;
	
			};
			struct v2f {
				float4 pos : SV_POSITION;
				half2 uv : TEXCOORD0;
				half4 color : TEXCOORD1;
			};


			v2f vert(Attributes v)
			{
				v2f o;
				o.pos = TransformObjectToHClip(v.positionOS.xyz);
				o.uv.xy = TRANSFORM_TEX(v.uv.xy,_MainTex);
				o.color = _EffectColor * v.color;
				return o;
			}

			half4 frag(v2f i) : SV_Target
			{
				half r = tex2D(_MainTex, i.uv.xy).r;
				half4 o;
				o = r * i.color;
				o.a = i.color.a;

				return o;
			}
			ENDHLSL
		}
	}
}