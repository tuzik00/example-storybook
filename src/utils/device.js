export const isMobile = () => {
    return window.innerWidth <= 400;
};

const isTablet = () => {
    return window.innerWidth > 400 && window.innerWidth < 1050;
};

export const isDesktop = () => {
    return window.innerWidth > 1050;
};

export const isHD = () => {
    return window.innerWidth > 1800;
};
