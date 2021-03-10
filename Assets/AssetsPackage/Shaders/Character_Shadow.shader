Shader "ysj/Character/Shadow"
{
    Properties
    {
		[Header(Shadow)]
		_LightDir("LightDir", Vector) = (0.2,-0.6, -0.8, 0.0)
		_ShadowColor("ShadowColor", Color) = (0.0, 0.0, 0.0, 0.5)
		_LightPos("LightPos", Vector) = (0.7, -0.5, 24.2, 0.0)
		_ShadowFalloff("ShadowFalloff",Float) = 0.3
		_ShadowOffset("ShadowOffset",Float) = 0
    }
    SubShader
    {  
		Tags {"RenderPipeline" = "UniversalPipeline" "QUEUE" = "Transparent" "RenderType" = "Transparent"}
        LOD 100

		Stencil
		{
			Ref 0
			Comp equal
			Pass incrWrap
			Fail keep
			ZFail keep
		}

		Blend  SrcAlpha OneMinusSrcAlpha
		Offset -1 ,0
		ZWrite off

		Pass
		{
			Tags { "RenderPipeline" = "UniversalPipeline" }
			Name "CommonShadowPass"
			Cull Front
			Blend  SrcAlpha OneMinusSrcAlpha

			HLSLPROGRAM
			#pragma vertex vert_shadow
			#pragma fragment frag_shadow

			#include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"


			struct appdata
			{
				float4 vertex : POSITION;
			};

			struct v2f
			{
				float4 vertex : SV_POSITION;
				float4 color : COLOR;
			};

			CBUFFER_START(UnityPerMaterial)
				float4 _LightDir;
				float4 _ShadowColor;
				float _ShadowFalloff;
				float4 _LightPos;
				float _ShadowOffset;
			CBUFFER_END

			float3 ShadowProjectPos(float4 vertPos)
			{

				float3 shadowPos;

				//得到顶点的世界空间坐标
				float3 worldPos = TransformObjectToWorld(vertPos.xyz);

				//灯光方向
				float3 lightDir = normalize(_LightDir.xyz);

				//阴影的世界空间坐标（低于地面的部分不做改变）
				shadowPos.y = min(worldPos.y, _LightDir.w) + _ShadowOffset;
				shadowPos.xz = worldPos.xz - lightDir.xz * max(0, worldPos.y - _ShadowOffset - _LightPos.w) / lightDir.y;

				return shadowPos;
			}

			v2f vert_shadow(appdata v)
			{
				v2f o = (v2f)0;

				//得到阴影的世界空间坐标
				float3 shadowPos = ShadowProjectPos(v.vertex);

				//转换到裁切空间
				o.vertex = TransformWorldToHClip(shadowPos);

				//得到中心点世界坐标
				float3 center = float3(unity_ObjectToWorld[0].w, _LightPos.w + _ShadowOffset, unity_ObjectToWorld[2].w);
				//计算阴影衰减
				float falloff = 1 - saturate(distance(shadowPos, center) * _ShadowFalloff);

				//阴影颜色
				o.color = _ShadowColor;
				o.color.a *= falloff;

				return o;
			}

			half4 frag_shadow(v2f i) : SV_Target
			{

				return i.color;
			}

			ENDHLSL
		}
	}

}
