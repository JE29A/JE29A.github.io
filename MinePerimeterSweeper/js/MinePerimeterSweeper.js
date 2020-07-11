class MinePerimeterSweeper {
	constructor(rows, columns, threshold_value) {
		this.table_rows = 10;
		this.table_columns = 10;
		this.threshold_value = 0.8;
		this.map = [];
		this.setRowCount(rows);
		this.setColumnCount(columns);
		this.setThresholdValue(threshold_value);
	}

	initialize() {
		this.map = []
		this.makeMap();
		this.calculatePerimeter();
	}

	boundValue(val, minv, maxv) {
		return Math.max(minv, Math.min(maxv, val));
	}

	setRowCount(rows) {
		this.table_rows = this.boundValue(rows, 5, 20);
	}
	setColumnCount(columns) {
		this.table_columns = this.boundValue(columns, 5, 20);
	}
	setThresholdValue(threshold_value) {
		this.threshold_value = this.boundValue(threshold_value, 0.15, 0.95);
	}

	makeMap() {
		this.map = [];
		var r, c, rows;
		var tds = [];
		var trs = [];
		var v, mode;
		
		tds.push('<th></th>');
		for (c = 0; c < this.table_columns; c++) {
			tds.push('<th column="'+ c +'"><div></div></th>');
		}
		trs.push('<tr>\n' + tds.join('\n') +'</tr>');
		for (r = 0; r < this.table_rows; r++) {
			rows = [];
			tds = ['<th row="'+ r +'"><div></div></th>'];
			mode = 0;
			for (c = 0; c < this.table_columns; c++) {
				if (this.toggleMarking()) {
					mode += 1;
				}
				v = (mode % 2) ? 1 : 0;
				rows.push(v);
				tds.push('<td row="'+ r +'" column="'+ c +'" onclick="My_Game.testCell($(this))" value="'+ v +'"><div></div></td>');
			}
			trs.push('<tr>\n'+ tds.join("\n") +'</tr>\n');
			this.map.push(rows);
		}
		var play_field = $('#play-field');
		if (play_field) {
			play_field.empty();
			play_field.append(trs.join('\n'));
		}
	}
	
	calculatePerimeter() {
		var r, c, count, counts, v;
		// left edge
		for (r = 0; r < this.table_rows; r++) {
			count = 0;
			counts = [];
			for (c = 0; c < this.table_columns; c++) {
				switch(this.map[r][c]) {
					case 1:
						count += 1;
						break;
					default:
						if (count > 0) {
							counts.push(count);
						}
						count = 0;
				}
			}
			if (count > 0) {
				counts.push(count);
			} else if (counts.length == 0) {
				counts = [0];
			}
			$('th[row="'+ r +'"] > div').text(counts.join(', '));
		}
		// top edge
		for (c = 0; c < this.table_columns; c++) {
			count = 0;
			counts = [];
			for (r = 0; r < this.table_rows; r++) {
				switch(this.map[r][c]) {
					case 1:
						count += 1;
						break;
					default:
						if (count > 0) {
							counts.push(count);
						}
						count = 0;
				}
			}
			if (count > 0) {
				counts.push(count);
			} else if (counts.length == 0) {
				counts = [0];
			}
			$('th[column="'+ c +'"] > div').text(counts.join(', '));
		}
	}
	
	toggleMarking() {
		var r = Math.random();
		return r < this.threshold_value;
	}
	
	testCell(cell) {
		var r = Number(cell.attr('row'));
		var c = Number(cell.attr('column'));
		
		cell.toggleClass('active');
	}
	
	revealMap() {
		$('td[value]').toggleClass('reveal');
	}
}

function UpdateRowsColumns() {
	var rows = $('input[name="row_count"]').val();
	var columns = $('input[name="column_count"]').val();
	var threshold = $('input[name="threshold"]').val();
	My_Game.setRowCount(rows);
	My_Game.setColumnCount(columns);
	My_Game.setThresholdValue(threshold);
	My_Game.initialize();
}

My_Game = new MinePerimeterSweeper(5, 5, 0.4);

$(document).ready(function() {
	My_Game.initialize();
	UpdateRowsColumns();
});
