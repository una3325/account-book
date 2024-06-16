import { initStore } from "./store";
import { initHistoryList } from "./components/history-list";
import { initCurrentAsset } from "./components/current-asset";
import { initAddItem } from "./components/add-item";

init();

function init() {
  initStore(); //스토어 객체 초기화 함수

  initCurrentAsset(); //현재 자산 입력 함수 초기화 
  initAddItem(); //새로운 아이템을 추가기능 초기화 
  initHistoryList(); //히스토리 기능 초기화, 과거 자산 기록 불러오기
}
