export function polarToCartesian(angle: number, radius: number) {
    const radians = (angle * Math.PI) / 180;

    return {
        x: Math.cos(radians) * radius,
        y: Math.sin(radians) * radius,
    };
}