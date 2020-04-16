import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IIndexState {
  username: string
}

@Module({ dynamic: true, store, name: 'index' })
class Index extends VuexModule implements IIndexState {
  public username = 'zhangsan'
}

export const IndexModule = getModule(Index)
