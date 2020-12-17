->story1

EXTERNAL Mutiply(x,y)
EXTERNAL GetCharacterName()
EXTERNAL GetCharacterNameByMutiParams(p1, p2, p3)

   
=== function GetCharacterName() 
    ~ return "Justin"

=== function GetCharacterNameByMutiParams(p1, p2, p3)
    ~ return "abc"


=== story1 === 
999:{GetCharacterNameByMutiParams(1,2,3)}当你靠近前眼邪洞时，它似乎从沉睡中苏醒了过来，某个声音从洞穴深处响起，“你若放弃生命或财富，或许会得到奖赏，如果你能证明自己的价值的话...”
你通常是不会向来历不明的怪物献上祭品的，但你决定为这个洞窟破个例。
{GetCharacterName()}, 你打算献上祭品吗？
+ [献上财富。（支付25个金币，有10%的几率获得一件神器）]->story1
+ [献上生命。（失去5点薪火生命值，有10%的几率获得一件神器）]->story1
* [离开]->END
- >>>GIVE_REWARD:80
-幽暗的洞底传来了一声响亮的打嗝声。“我们已经认可了你的价值”
* [出发]
->END




===story2===
998:老爷车号穿过了一昝废弃的车站。曾经人声鼎沸的工坊如今已空无一人，成了拾荒者们的聚集地，虽然周围一片废墟，你依然在碎石之中找到了某些或许会有用的东西：一个巨大的吊钩，以及几扇可以快速开关的门
你打算从车站中回收资源吗？
* [门。(获得陷阱滑道。)] 
    >>>GIVE_REWARD:88
* [吊钩。(获得铜质勾爪。)] 
    >>>GIVE_REWARD:89
* [离开]->END
-你的眼光独到
* [出发]
->END


VAR currentClickCnt = 2
===story3===
测试点击次数
+ {currentClickCnt > 0} [测试点击{currentClickCnt}次数] ->story3
*->stick

=stick
- 最后显示的汇集
->END



