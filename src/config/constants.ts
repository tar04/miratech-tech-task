const size = {
		mobileMin: "320px",
		mobileMax: "767px",
		tabletMin: "768px",
		tabletMax: "1023px",
		desktop: "1024px",
};

const device = {
		mobileMin: `min-width: ${size.mobileMin}`,
		mobileMax: `max-width: ${size.mobileMax}`,
		tabletMin: `min-width: ${size.tabletMin}`,
		tabletMax: `max-width: ${size.tabletMax}`,
		desktop: `min-width: ${size.desktop}`,
};

export {size, device};