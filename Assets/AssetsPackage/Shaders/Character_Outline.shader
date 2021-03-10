Shader "ysj/Character/Outline"
{
    Properties
    {
		[Header(Outline)]
		_OutlineColor("Outline Color", Color) = (0,0,0,1)
		_OutlineWidth("Outline Width", Float) = 1
		_Fadeout("Fadeout", Float) = 1.0
    }
    SubShader
    {  
		Tags {"RenderPipeline" = "UniversalPipeline" }
        LOD 100

		//Outline
		Pass
		{
			Tags {"RenderPipeline" = "UniversalPipeline"}
			Name "CommonOutlinePass"
			Cull Front

			HLSLPROGRAM
			#pragma vertex vert_outline
			#pragma fragment frag_outline

			#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

			struct appdata
			{
				float4 positionOS : POSITION;
				float2 uv : TEXCOORD0;
				half4 color : COLOR; //顶点颜色
				float3 normal : NORMAL;
			};

			struct v2f
			{
				//float4 uv : TEXCOORD0;
				float4 color: COLOR0;
				float4 pos : SV_POSITION;
			};

			CBUFFER_START(UnityPerMaterial)
			sampler2D _MainTex;
			float4 _MainTex_ST;

			float _CharacterAlpha;
			float4 _OutlineColor;
			float _OutlineWidth;
			float _Fadeout;
			CBUFFER_END



			v2f vert_outline(appdata v)
			{
				v2f o;

				VertexPositionInputs vertexInput = GetVertexPositionInputs(v.positionOS.xyz);


				float camProjM11 = float(1.0) / unity_CameraProjection[1].y;

				float proj_normal = float(1.0) / max(abs(camProjM11), 1.0) * min(abs(camProjM11), 1.0);


				float power_pro = proj_normal * proj_normal;

				float proj_offset = ((power_pro * (power_pro * (power_pro * (power_pro * 0.0208350997 - 0.0851330012) + 0.180141002) - 0.330299497) + 0.999866009) * proj_normal) * -2.0 + 1.57079637;

				camProjM11 = min(camProjM11, 1.0);


				proj_offset = (1.0 < abs(camProjM11)) ? proj_offset : float(0.0);
				proj_normal = proj_normal * power_pro + proj_offset;

				camProjM11 = (camProjM11 < 0) ? (-proj_normal) : proj_normal;
				camProjM11 = sqrt(1 - (60.0 - camProjM11 * 114.59156) * 0.0166666675);


				float3 worldNormal = TransformObjectToWorldNormal(v.normal) * float3(0.00200000009, 0.00200000009, 0.00200000009);

				float3 worldPos = vertexInput.positionWS;

				float3 worldViewDir = GetCameraPositionWS() - worldPos;  //相机方向

				float cameraDis = sqrt(max(sqrt(dot(worldViewDir, worldViewDir)) - 0.150000006, 0.00400000019));

				float3 finalPos = camProjM11 * worldNormal * cameraDis * max(_OutlineWidth, 0.00400000019) + worldPos;


				o.pos = TransformWorldToHClip(finalPos);

				o.color = v.color * _Fadeout;

				return o;
			}

			half4 frag_outline(v2f i) : SV_Target
			{
				return half4(_OutlineColor.xyz, i.color.w * _OutlineColor.w);
			}


			ENDHLSL
		}

	}

}
