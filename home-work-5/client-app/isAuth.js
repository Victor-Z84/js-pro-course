function isAuth() {
    if (Math.random() > 0.5) {
        return true;
    }
    return false;
}

export default isAuth; // далее при импорте не используем фигурных скобок {...}