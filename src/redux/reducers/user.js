import createReducer from '@/utils//createReducer'
import { ACTION_HANDLERS } from 'ACTION/user'
import initState from 'STORE/initState'

export default createReducer(initState.userData, ACTION_HANDLERS)
