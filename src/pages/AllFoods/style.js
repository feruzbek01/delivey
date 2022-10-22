import styled from "styled-components";

export const AllFoodContainer = styled.div`
  .search_widget,
  .sorting_widget select {
    padding: 7px 15px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
  }

  .search_widget input {
    border: none;
    outline: none;
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

  .search_widget input {
    width: 50% !important ;
    font-size: 0.8rem;
  }
  .sorting_widget select {
    width: 50% !important;
    font-size: 0.8rem;
  }

  

  @media only screen and (max-width: 768px) {
    .search_widget {
      width: 100%;
      margin-bottom: 20px;
    }
    .search_widget {
      width: 100% !important ;
      font-size: 0.8rem;
    }
    .sorting_widget select {
      width: 100% !important;
      font-size: 0.8rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .search_widget {
      width: 100%;
      margin-bottom: 20px;
    }
    .search_widget {
      width: 100% !important ;
      font-size: 0.8rem;
    }
    .sorting_widget select {
      width: 100% !important;
      font-size: 0.8rem;
    }
  }
`;
