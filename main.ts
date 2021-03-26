scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterWest1, function (sprite, location) {
    mySprite.setVelocity(0, 0)
    mySprite.x += -5
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {
    mySprite.y += 5
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    game.over(true)
    info.startCountdown(10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast1, function (sprite, location) {
    mySprite.y += -5
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 3 . . . . . . . . . 3 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f . . . . . . f . . . . . 
    . . . . f . . . . f f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
tiles.setWallAt(tiles.getTileLocation(1, 1), true)
mySprite.setBounceOnWall(true)
mySprite.setStayInScreen(true)
mySprite.setImage(img`
    f f f f f f f f f f f f f f 
    f f 1 1 1 1 1 1 1 1 1 1 f f 
    f f 1 1 1 1 1 1 1 1 1 1 f f 
    f f 1 1 f f f f f f 1 1 f f 
    f f 1 1 f f f f f f 1 1 f f 
    f f 1 1 f f f f f f 1 1 f f 
    f f 1 1 f f f f f f 1 1 f f 
    f f 1 1 f f f f f f 1 1 f f 
    f f 1 1 1 1 1 1 1 1 1 1 f f 
    f f 1 1 1 1 1 1 1 1 1 1 f f 
    f f 1 1 1 1 1 1 1 1 1 1 f f 
    f f 1 1 1 1 1 1 1 1 1 1 f f 
    f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f 
    `)
