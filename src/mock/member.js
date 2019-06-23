import {Random} from 'mockjs';

export default {
    addMember(options, ret) {},
    deleteMember(options, ret) {},
    getAllMembers(options, ret) {
        ret.data = {
            members: [{
                id: '3160608005',
                name: '刘波波',
                permission: 'admin'
            }]
        };
        for(let i=0;i<34;i++) {
            ret.data.members.push({
                id: Random.integer(3160608001, 3160608034),
                name: Random.cname(),
                permission: 'normal'
            })
        }
    }
}