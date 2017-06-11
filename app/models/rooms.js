import api from '../config/api';
import {sendRequest} from '../service/request';


export default {
    namespace: 'rooms',

    state: {
        rooms: [],
    },

    effects: {
        *getRooms({callback},{put}) {
            let rs = yield sendRequest(api.rooms.getRooms);
            if(rs && rs.err_code == 0){
                yield put({type: 'setRooms', rooms: rs.rooms});
            }
        },
        *getRoomInfo({params, callback}) {
            let rs = yield sendRequest(api.rooms.getRoomInfo, params);
            if(rs && rs.err_code == 0){
                callback && callback(rs.room);
            }
        },
    },

    reducers: {
        setRooms(state, {rooms}){
            return {...state, rooms}
        }
    },
}