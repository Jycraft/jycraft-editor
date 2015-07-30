# jycraft-codecraft
Web-based coding, sharing, and distribution environment for Jycraft



from mcapi import *
from net.canarymod.hook.system import ServerTickHook

def tick(event):
    yell("tick")
    
registerhook(ServerTickHook, tick)



# =========

from net.canarymod import Canary, LineTracer
from net.canarymod.api.world.blocks import BlockType

from time import *
from random import *
from math import *

s = Canary.getServer()
w = s.getDefaultWorld()
p = s.getPlayer("PMD221")

s.broadcastMessage("Hello!")
w.setTime(1)
w.setRaining(True)

w.makeExplosion(p, p.getPosition(), 8, True)
w.makeExplosion(None, p.getPosition(), 8, True)

w.makeExplosion(p, LineTracer(p).getTargetBlock().getPosition(), 8, True)



from net.canarymod import Canary, LineTracer
from time import *

s = Canary.getServer()
w = s.getDefaultWorld()
p = s.getPlayer("PMD221")

def glp(p):
    return LineTracer(p).getTargetBlock().getPosition()
    
for i in range(0,10):
    w.makeExplosion(p, glp(p), 6, True)
    w.makeLightningBolt(glp(p))
    sleep(1)