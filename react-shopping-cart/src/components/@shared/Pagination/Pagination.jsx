import styled from 'styled-components';

import PaginationButton from 'components/@shared/PaginationButton/PaginationButton';

const isActive = (idx, pageNum) => Number(idx) === pageNum;

// 재사용O
function Pagination({ totalPages = 5, page, handlePage }) {
  return (
    <Styled.Root>
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNum = index + 1;

        return (
          <PaginationButton
            key={pageNum}
            pageNum={pageNum}
            onClick={() => handlePage(pageNum)}
            isActive={isActive(page, pageNum)}
          />
        );
      })}
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    display: flex;
    gap: 15px;
  `,
};

export default Pagination;
