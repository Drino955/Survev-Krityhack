export function obstacleOpacity(){
    unsafeWindow.game.map.obstaclePool.pool.forEach(obstacle => {
        if (!['bush', 'tree', 'table', 'stairs'].some(substring => obstacle.type.includes(substring))) return;
        obstacle.sprite.alpha = 0.45
    });
}
