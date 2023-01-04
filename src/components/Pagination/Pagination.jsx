import {
  PaginationContainerStyled,
  PaginationButtonStyled,
  PaginationPagesCounterStyled,
} from './Pagination.styled';

export const Pagination = ({ page, totalPages, changePage }) => {
  const clickHandler = ({ target: { name } }) => {
    switch (name) {
      case 'start':
        changePage(1);
        break;
      case 'back':
        changePage(Number(page) - 1);
        break;
      case 'forward':
        changePage(Number(page) + 1);
        break;
      case 'finish':
        changePage(totalPages);
        break;
      default:
        break;
    }
  };

  return (
    <PaginationContainerStyled>
      <PaginationButtonStyled
        disabled={page === 1}
        onClick={clickHandler}
        name="start"
      >
        first
      </PaginationButtonStyled>
      <PaginationButtonStyled
        disabled={page === 1}
        onClick={clickHandler}
        name="back"
      >
        -1
      </PaginationButtonStyled>

      <PaginationPagesCounterStyled>
        {page} of {totalPages}
      </PaginationPagesCounterStyled>

      <PaginationButtonStyled
        disabled={page === totalPages}
        onClick={clickHandler}
        name="forward"
      >
        +1
      </PaginationButtonStyled>
      <PaginationButtonStyled
        disabled={page === totalPages}
        onClick={clickHandler}
        name="finish"
      >
        last
      </PaginationButtonStyled>
    </PaginationContainerStyled>
  );
};
