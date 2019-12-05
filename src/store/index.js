import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  TYPE: {
    ALL: '全て',
    DOING: '作業中',
    DONE: '完了'
  },
  _todos: [],
  _radioType: ''
}

const getters = {
  typeAll: state => state.TYPE.ALL,
  typeDoing: state => state.TYPE.DOING,
  typeDone: state => state.TYPE.DONE,
  todos: state => {
    // _todosをコピーして画面表示用idを付与したtodosを作成
    const todos = JSON.parse(JSON.stringify(state._todos))
    todos.forEach((todo, index) => {
      todo.id = index + 1
    })
    // _radioTypeが初期値かALLの時todosを返す
    if (state._radioType === '' || state._radioType === state.TYPE.ALL) {
      return todos
    } else {
      // _radioTypeに応じたstatusのtodosを返す
      return todos.filter(todo => {
        return todo.status === state._radioType
      })
    }
  }
}

const actions = {
  addTodo({ commit }, item) {
    commit('addTodo', item)
  },
  deleteTodo({ commit }, index) {
    commit('deleteTodo', index)
  },
  changeTodoStatus({ commit }, index) {
    commit('changeTodoStatus', index)
  },
  changeRadioType({ commit }, radioType) {
    commit('changeRadioType', radioType)
  }
}

const mutations = {
  addTodo(state, item) {
    const todo = {
      task: item,
      status: state.TYPE.DOING
    }
    state._todos.push(todo)
  },
  deleteTodo(state, index) {
    state._todos.splice(index, 1)
  },
  changeTodoStatus(state, index) {
    state._todos[index].status =
      state._todos[index].status === state.TYPE.DOING
        ? state.TYPE.DONE
        : state.TYPE.DOING
  },
  changeRadioType(state, radioType) {
    state._radioType = radioType
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
