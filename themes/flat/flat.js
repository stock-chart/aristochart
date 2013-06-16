/**
 * @theme Flat
 * @author Adrian Cooney <cooney.adrian@gmail.com> (http://adriancooney.ie)
 * @license http://opensource.org/licenses/MIT
 */

Aristochart.themes.flat = {
	margin: 70,
	padding: 20,	

	fill: {
		fillToBaseLine: false
	},

	style: {
		y: {
			line: {
				fill: "#aadcce"
			}
		},

		y1: {
			line: {
				fill: "#dce1a0"
			}
		},

		y2: {
			line: {
				fill: "#f19482"
			}
		},

		default: {
			point: {
				fill: "#000",
				radius: 2,
				width: 0,
				visible: false
			},

			line: {
				stroke: "#000",
				width: 2,
				visible: false,
				fillToBaseLine: false
			},

			axis: {
				stroke: "#ddd",
				width: 3,

				x: {
					visible: false
				}
			},

			tick: {
				align: "inside", //"outside", "inside",
				stroke: "#ddd",
				width: 2,
				minor: 5,
				major: 5,
				visible: false
			},

			label: {
				x: {
					font: "Helvetica",
					fontSize: 10,
					fontStyle: "normal",
					color: "#ddd",
					align: "center",
					baseline: "bottom",
					offsetY: 14,
					offsetX: 3,
					visible: false
				},

				y: {
					font: "Helvetica",
					fontSize: 10,
					fontStyle: "normal",
					color: "#ddd",
					align: "center",
					baseline: "bottom",
					offsetY: 8,
					offsetX: 8
				}
			},

			title: {
				color: "#777",
				font: "georgia",
				fontSize: "16",
				fontStyle: "italic",

				x: {
					offsetX: 0,
					offsetY: 60,
				},

				y: {
					offsetX: -135,
					offsetY: 10,
					visible: false
				}
			}
		}
	}
};