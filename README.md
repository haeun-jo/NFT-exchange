### 요구사항

간단한 NFT 거래소 서비스의 일부 화면과 플로우를 구현합니다.

- **NFT 컬렉션 목록 화면**
  - 피그마 디자인을 따라 UI를 구현합니다.
  - 상단 탭바는 동작해야 하며, 랜덤한 순서로 NFT 컬렉션 카드를 배치하면 됩니다.
- **프로필 버튼**
  - 지갑이 연결되어있지 않을 시 프로필 이미지는 비어있습니다.
  - 프로필 버튼 클릭시 드롭다운 메뉴영역이 보여집니다.
- **지갑 연동**
  - 프로필 메뉴의 Connect 버튼 클릭시 메타마스크 지갑 연결을 시도합니다.
  - 메타마스크 창에서 지갑 연결 과정이 완료됩니다.
  - 지갑 연결 완료 후 해당 지갑의 이더리움 잔액과, 프로필 이미지, 주소 등을 가져와 디자인에 맞게 출력합니다.
  - 지갑 연결, 잔액 조회는 [web3-react](https://www.npmjs.com/package/web3-react) 라이브러리 사용을 권장합니다.
  - 프로필 이미지 구현은 [@metamask/jazzicon](https://www.npmjs.com/package/@metamask/jazzicon) 라이브러리 사용을 권장합니다.
