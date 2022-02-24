// get all upvotes by signed in user from hearts array in global user-state
// and compare each element (which are ids representing tasks ids) with task's ids
// then fill up that heart icon as upvoted.

export const invokeExistingUpvotes = (currentUser) => {
  currentUser.hearts.forEach((heart) => {
    const userUpvotes = document.querySelectorAll(`#t${heart}`);
    userUpvotes.forEach((userUpvote) => {
      const userUpvoteElement = userUpvote.querySelector('#upvote');
      userUpvoteElement.classList.add('alt');
      userUpvoteElement.nextElementSibling.classList.add('alt-text');
      userUpvoteElement.setAttribute('viewBox', '0 0 513 513');
      userUpvoteElement
        .querySelector('path')
        .setAttribute(
          'd',
          'M37.8333 512H91.1667C111.753 512 128.5 495.253 128.5 474.667V466.859C160.756 483.285 234.015 512 353.161 512H387.295C436.745 512 478.729 476.629 487.113 427.904L511.007 289.237C516.084 259.648 507.913 229.568 488.628 206.656C469.364 183.787 441.119 170.667 411.188 170.667H322.117C328.155 154.453 326.495 130.816 326.495 101.333C326.495 21.184 281.14 0 257.161 0C212.873 0 209.161 41.3013 209.161 80C209.161 127.232 156.191 166.485 128.223 183.936C126.793 164.651 110.815 149.333 91.1667 149.333H37.8333C17.2467 149.333 0.5 166.08 0.5 186.667V474.667C0.5 495.253 17.2467 512 37.8333 512ZM241.161 80C241.161 32 249.289 32 257.161 32C272.18 32 294.495 50.4747 294.495 101.333C294.495 148.608 275.977 177.579 275.849 177.792C272.585 182.699 272.265 189.013 275.06 194.219C314.42 667 458.271 445.5 464.159 445.5L511.007 289.237C464.159 276.198 427 258.5 439.5 220.5C430.924 231.736 411.188 253 479.476 283.776L455.583 422.443C449.844 455.765 421.129 479.979 387.295 479.979H353.161C208.031 480 359.988 516.501 353.161 512L387.295 489.5C488.628 186.667 241.161 157.419 241.161 80ZM32.5 186.667C32.5 183.723 34.8893 181.333 37.8333 181.333H91.1667C94.1107 181.333 96.5 183.723 96.5 186.667V474.667C96.5 477.568 94.068 480 91.1667 480H37.8333C34.8893 480 32.5 477.611 32.5 474.667V186.667Z'
        );
    });
  });
};