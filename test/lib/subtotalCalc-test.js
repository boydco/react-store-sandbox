import subtotalCalc from '../lib/subtotalCalc.js'
import {expect} from 'chai'
import {List, Map} from 'immutable'

const 

describe('Reducer', () => {
  it('')

})


describe('initial state', () => {
  it('has a default product list', () => {
    const state = reducer(undefined,{})
    expect(state.get('products').size).to.equal(5)
    expect(state.get('products').first().get('name')).to.equal('spaghetti')
  })
  it('has a cart with two items', () => {
    const state = reducer(undefined, {})
    expect(state.get('cart').size).to.equal(2)
  })
})
describe('cart', () => {
  it('adds a product to the shopping cart', () => {
    const state = reducer(undefined, {
      type: 'ADD_PRODUCT_TO_CART',
      id: 3
    })
    expect(state.get('cart').size).to.equal(3)
    expect(state.get('cart')).to.include(3)
  })
  it('removes a product from the shopping cart', () => {
    const state = reducer(undefined, {
      type: 'REMOVE_PRODUCT_FROM_CART',
      id: 1
    })
    expect(state.get('cart').size).to.equal(1)
    expect(state.get('cart').first()).to.equal(4)
  })
})