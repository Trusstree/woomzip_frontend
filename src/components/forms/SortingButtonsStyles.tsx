// SortingButtonsStyles.tsx
// 최신순, 추천순, 리뷰 많은 순 정렬 버튼

const sortingButtonStyles = {
    button: {
      backgroundColor: "#1F74F4",
      color: "white",
      border: "none",
      padding: "10px 20px",
      marginRight: "10px",
      borderRadius: "5px",
    },
  };
  
  export default function sortingButton() {
    return (
      <div className="sorting-button" style={{ display: "flex", justifyContent: "right", margin: "20px" }}>

          <button style={sortingButtonStyles.button}>최신순</button>
          <button style={sortingButtonStyles.button}>추천순</button>
          <button style={sortingButtonStyles.button}>리뷰 많은 순</button>
      </div>
    );

  }
  