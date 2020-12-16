using System;

namespace NiceTS
{
	[Flags]
	public enum LogGroups
	{
		Engine = 0x1,
		Gameplay = 0x2,
		Sound = 0x4,
		Network = 0x8,
		Ink = 0x10,
		StoryEvents = 0x20,
		Tools = 0x40,
		AssetLoading = 0x80,
		UI = 0x100,
		Analytics = 0x200,
		Animation = 0x400,
		Audio = 0x800,
		Pubsub = 0x1000,
		Compendium = 0x2000,
		Random = 0x4000,
		Localization = 0x8000,
		Save = 0x10000,
		Achievements = 0x20000,
		RichPresence = 0x40000,
		Console = 0x80000,
		Gameflow = 0x100000,
		Stats = 0x200000,
		Determinism = 0x400000,
		Chatter = 0x800000,
		RunHistory = 0x1000000
	}
}
