import m from 'mithril';
import stream from 'mithril/stream';
import codeString from '../../util/codeString.js';

const es5 = codeString(
`function formModel() {
	return {
		longField: {
			value: stream(''),
			error: ''
		},
		shortField: {
			value: stream(''),
			error: ''
		}
	};
}

var actions = {
	validate: {
		longField: function(field) {
			field.error = field.value().length < 10 ?
				'Expected at least 10 characters' : '';
		},
		shortField: function(field) {
			field.error = field.value().length > 5 ?
				'Expected no more than 5 characters' : '';
		}
	},
	validateAll: function(model) {
		Object.keys(model).forEach(function(field) {
			actions.validate[field](model[field]);
		});
	}
};

var ValidatedInput = {
	view: function(vnode) {
		return [
			m('input[type=text]', {
				className: vnode.attrs.field.error ? 'error' : '',
				value: vnode.attrs.field.value(),
				oninput: m.withAttr('value', vnode.attrs.field.value)
			}),
			m('p.errorMessage', vnode.attrs.field.error)
		];
	}
};

function Component() {
	var model = formModel();
	return {
		view: function() {
			return (
				m('form', {
					onsubmit: function(event) {
						event.preventDefault();
						actions.validateAll(model);
					}
				},
					m('p', 'At least 10 characters:'),
					m(ValidatedInput, { field: model.longField }),
					m('p', 'No more than 5 characters:'),
					m(ValidatedInput, { field: model.shortField }),
					m('hr'),
					m('button[type=submit]', 'Validate')
				)
			);
		}
	};
}`);

const es6 = codeString(
`function formModel() {
	return {
		longField: {
			value: stream(''),
			error: ''
		},
		shortField: {
			value: stream(''),
			error: ''
		}
	};
}

const actions = {
	validate: {
		longField(field) {
			field.error = field.value().length < 10 ?
				'Expected at least 10 characters' : '';
		},
		shortField(field) {
			field.error = field.value().length > 5 ?
				'Expected no more than 5 characters' : '';
		}
	},
	validateAll(model) {
		Object.keys(model).forEach((field) =>
			actions.validate[field](model[field]));
	}
};

const ValidatedInput = {
	view({ attrs }) {
		return [
			m('input[type=text]', {
				className: attrs.field.error ? 'error' : '',
				value: attrs.field.value(),
				oninput: m.withAttr('value', attrs.field.value)
			}),
			m('p.errorMessage', attrs.field.error)
		];
	}
};

function Component() {
	const model = formModel();
	return {
		view() {
			return (
				m('form', {
					onsubmit(event) {
						event.preventDefault();
						actions.validateAll(model);
					}
				},
					m('p', 'At least 10 characters:'),
					m(ValidatedInput, { field: model.longField }),
					m('p', 'No more than 5 characters:'),
					m(ValidatedInput, { field: model.shortField }),
					m('hr'),
					m('button[type=submit]', 'Validate')
				)
			);
		}
	};
}`);

export const code = [
  { id: 'es6', code: es6 },
  { id: 'es5', code: es5 }
];

function formModel() {
	return {
		longField: {
			value: stream(''),
			error: ''
		},
		shortField: {
			value: stream(''),
			error: ''
		}
	};
}

const actions = {
	validate: {
		longField(field) {
			field.error = field.value().length < 10 ?
				'Expected at least 10 characters' : '';
		},
		shortField(field) {
			field.error = field.value().length > 5 ?
				'Expected no more than 5 characters' : '';
		}
	},
	validateAll(model) {
		Object.keys(model).forEach((field) =>
			actions.validate[field](model[field]));
	}
};

const ValidatedInput = {
	view({ attrs }) {
		return [
			m('input[type=text]', {
				className: attrs.field.error ? 'error' : '',
				value: attrs.field.value(),
				oninput: m.withAttr('value', attrs.field.value)
			}),
			m('p.errorMessage', attrs.field.error)
		];
	}
};

export function Component() {
	const model = formModel();
	return {
		view() {
			return (
				m('form', {
					onsubmit(event) {
						event.preventDefault();
						actions.validateAll(model);
					}
				},
					m('p', 'At least 10 characters:'),
					m(ValidatedInput, { field: model.longField }),
					m('p', 'No more than 5 characters:'),
					m(ValidatedInput, { field: model.shortField }),
					m('hr'),
					m('button[type=submit]', 'Validate')
				)
			);
		}
	};
}