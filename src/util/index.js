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

export function addPermission(permission, add) {
    if(typeof add=='string') {
        add = [add];
    }
    if(typeof permission=='string') {
        permission = [permission];
    }
    permission = new Set(permission);
    add.forEach(v => permission.add(v));
    permission = Array.from(permission);
    return permission;
}

export function deletePermission(permission, del) {
    if(typeof del=='string') {
        del = [del];
    }
    if(typeof permission=='string') {
        permission = [permission];
    }
    permission = new Set(permission);
    del.forEach(v => permission.delete(v));   
    permission = Array.from(permission);
    return permission; 
}