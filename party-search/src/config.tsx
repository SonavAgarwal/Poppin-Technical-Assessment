// import { IParticleOptions } from "tsparticles";

import { IParticlesProps } from "react-particles";

export const champagneConfig: IParticlesProps = {
	options: {
		particles: {
			number: {
				value: 30,
			},
			color: {
				value: "#ffe89c",
			},
			shape: {
				type: "circle",
			},
			opacity: {
				value: 0.5,
				random: true,
			},
			size: {
				value: 5,
				random: true,
			},
			move: {
				enable: true,
				speed: 7,
				direction: "top",
				random: true,
				straight: false,
				out_mode: "out",
			},
		},
	},
};

export const backgroundParticleConfig: IParticlesProps = {
	options: {
		particles: {
			number: {
				value: 3, // TODO
			},
			color: {
				value: ["#C21FD6", "#8F64E9", "#52B3FB"],
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#000000",
				},
			},
			opacity: {
				value: 1,
				random: false,
			},
			size: {
				value: 100,
				random: false,
			},
			move: {
				enable: true,
				speed: 3,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "out",
				bounce: false,
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
	},
};
