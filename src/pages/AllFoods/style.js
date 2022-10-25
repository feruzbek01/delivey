import styled from "styled-components";

export const AllFoodContainer = styled.div`
  .search_widget,
  .sorting_widget {
    height: 44px;
    padding: 10px 15px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid black;
  }

  .search_widget input,
  .sorting_widget select {
    border: none;
    outline: none;
    font-size: 17px;
  }


  section{
    padding: 35px 0;
  }

  
  .paginationBttns {
    width: 80px;
    height: 40px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    list-style: none;
    margin-top: 2rem;

    a {
      padding: 5px 13px;
      background-color: #212245;
      border-radius: 5px;
      color: white !important ;

      :hover {
        background: #df2020;
      }
    }
  }

  
  @media (max-width: 575px){
    .search_widget{
      margin-bottom: 15px;
    }
  }

`;
