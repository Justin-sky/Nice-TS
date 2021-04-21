# Write by 橘子猫

import subprocess
import os
import sys

curPath = sys.path[0] + "\\"

exePath = curPath + "PlaneB.exe"
imagePath = curPath + "example" + "\\"

#空格作为分隔符
#spaces as separators
imageNames = ""
imageNames += "a.png "
imageNames += "b.png "
imageNames += "c.png "
imageNames += "d.png "
imageNames += "e.png "
imageNames += "f.png "
imageNames += "g.png"

exportpath = curPath + "wow.png"

blendingtimes = 50

subprocess.call([exePath, "--folderpath", "{}".format(imagePath), "--name", "{}".format(imageNames), "--exportpath", "{}".format(exportpath), "--blendingtimes", str(blendingtimes)])