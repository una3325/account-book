import { store, updateStorage } from '../store'
import { toHidden, toShow } from '../util'

//Selector 앞에 $표시관습 : 앞에 변수가 DOM요소를 가르킨다.
const $currentAssetInput = document.querySelector('.current-asset-input')
const $currentAssetValue = document.querySelector('.current-asset-value')
const $currentAssetButton = document.querySelector('.current-asset-button')
const $addItemButton = document.querySelector('.add-item-button')

export function initCurrentAsset() {
  renderCurrentAsset()
  addCurrentAssetEventListener()
  //ui를 심고, 렌더링 하는 부분이 필요하다.
}

function addCurrentAssetEventListener() {
  $currentAssetValue.addEventListener('click', function (event) {
    if (!store.isFirstEdit) return
    toHidden(event.target)
    toShow($currentAssetInput)
    toShow($currentAssetButton)

    $currentAssetInput.focus()
  })

  $currentAssetButton.addEventListener('click', function (event) {
    toHidden(event.target)
    toHidden($currentAssetInput)
    toShow($currentAssetValue)
    toShow($addItemButton)

    store.currentFunds = Number($currentAssetInput.value)
    renderCurrentAsset()

    store.isFirstEdit = false

    updateStorage()
  })
}

export function renderCurrentAsset() {
  // TODO: 숫자에 콤마 작성
  // TODO: currentFunds가 없는 경우
  // 1. if문
  // if (store.currentFunds) {
  //   $currentAssetValue.textContent = store.currentFunds.toLocaleString() ?? '-'
  // }

  // 2. 삼항 연산자
  // $currentAssetValue.textContent = store.currentFunds
  //   ? store.currentFunds.toLocaleString()
  //   : '-'

  //3. Optional Chaining
  $currentAssetValue.textContent = store.currentFunds?.toLocaleString() ?? '-'
  $currentAssetInput.value = store.currentFunds
}
