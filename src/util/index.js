export function hasPermission(permission, required) {
    if(typeof required=='string') {
        required = [required];
    }
    if(typeof permission=='string') {
        permission = [permission];
    }
    permission = new Set(permission);
    return required.some(p=>permission.has(p));
}