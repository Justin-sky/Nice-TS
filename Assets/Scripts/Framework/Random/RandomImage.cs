using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace NiceTS 
{ 
	[RequireComponent(typeof(Image))]
	public class RandomImage : MonoBehaviour
	{
		[SerializeField]
		private List<Sprite> possibleSprites;

		private void Awake()
		{
			if (!possibleSprites.IsNullOrEmpty())
			{
				GetComponent<Image>().sprite = possibleSprites.RandomElement(RngId.NonDeterministic);
			}
		}
	}
}
