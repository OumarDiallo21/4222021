let mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f 4 4 4 4 4 f . . . . . . 
    . . f d d d d 4 4 4 f . . . . . 
    . c d f d d f d 4 4 f f . . . . 
    . c d f d d f d 4 4 d d f . . . 
    c d e e d d d d 4 4 b d c . . . 
    c d d d d c d d 4 4 b d c . . . 
    c c c c c d d 4 4 4 f c . . . . 
    . f d d d d 4 4 4 f f . . . . . 
    . . f f f f f 4 4 4 4 f . . . . 
    . . . . f f 4 4 4 4 4 4 f . f f 
    . . . f 4 4 f 4 4 f 4 4 f . 4 f 
    . . f 4 4 f 4 4 f 4 4 4 f . 4 f 
    . f b d f d b f b b f 4 f f 4 f 
    . f d d f d d f d d b 4 f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f 2 2 2 2 2 f . . . . . . 
    . . f d d d d 2 2 2 f . . . . . 
    . c d f d d f d 2 2 f f . . . . 
    . c d f d d f d 2 2 d d f . . . 
    c d e e d d d d 2 2 b d c . . . 
    c d d d d c d d 2 2 b d c . . . 
    c c c c c d d 2 2 2 f c . . . . 
    . f d d d d 2 2 2 f f . . . . . 
    . . f f f f f 2 2 2 2 f . . . . 
    . . . . f f 2 2 2 2 2 2 f . f f 
    . . . f 2 2 f 2 2 f 2 2 f . 2 f 
    . . f 2 2 f 2 2 f 2 2 2 f . 2 f 
    . f b d f d b f b b f 2 f f 2 f 
    . f d d f d d f d d b 2 f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f 8 8 8 8 8 f . . . . . . 
    . . f d d d d 8 8 8 f . . . . . 
    . c d f d d f d 8 8 f f . . . . 
    . c d f d d f d 8 8 d d f . . . 
    c d e e d d d d 8 8 b d c . . . 
    c d d d d c d d 8 8 b d c . . . 
    c c c c c d d 8 8 8 f c . . . . 
    . f d d d d 8 8 8 f f . . . . . 
    . . f f f f f 8 8 8 8 f . . . . 
    . . . . f f 8 8 8 8 8 8 f . f f 
    . . . f 8 8 f 8 8 f 8 8 f . 8 f 
    . . f 8 8 f 8 8 f 8 8 8 f . 8 f 
    . f b d f d b f b b f 8 f f 8 f 
    . f d d f d d f d d b 8 f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f 5 5 5 5 5 f . . . . . . 
    . . f d d d d 5 5 5 f . . . . . 
    . c d f d d f d 5 5 f f . . . . 
    . c d f d d f d 5 5 d d f . . . 
    c d e e d d d d 5 5 b d c . . . 
    c d d d d c d d 5 5 b d c . . . 
    c c c c c d d 5 5 5 f c . . . . 
    . f d d d d 5 5 5 f f . . . . . 
    . . f f f f f 5 5 5 5 f . . . . 
    . . . . f f 5 5 5 5 5 5 f . f f 
    . . . f 5 5 f 5 5 f 5 5 f . 5 f 
    . . f 5 5 f 5 5 f 5 5 5 f . 5 f 
    . f b d f d b f b b f 5 f f 5 f 
    . f d d f d d f d d b 5 f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
mySprite.setPosition(randint(0, 10), randint(0, 10))
mySprite2.setPosition(randint(0, 10), randint(0, 10))
mySprite3.setPosition(randint(0, 10), randint(0, 10))
mySprite4.setPosition(randint(0, 10), randint(0, 10))
