/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { StoryObj } from '@storybook/vue3';
import { note } from '../../.storybook/fakes';
import MkNoteDetailed from './MkNoteDetailed.vue';
export const Default = {
	render(args) {
		return {
			components: {
				MkNoteDetailed,
			},
			setup() {
				return {
					args,
				};
			},
			computed: {
				props() {
					return {
						...this.args,
					};
				}, /*
				events() {
					return {
						react: action('react'),
						undoReact: action('undoReacts'),
					};
				},*/
			},
			template: '<MkNoteDetailed v-bind="props" />',
		};
	},
	args: {
		note: note(null, undefined),
		pinned: false,
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkNoteDetailed>;
export const likeOnly = {
	...Default,
	args: {
		...Default.args,
		note: note('likeOnly', undefined),
	},
} satisfies StoryObj<typeof MkNoteDetailed>;
export const likeOnlyWithMyreaction = {
	...Default,
	args: {
		...Default.args,
		note: note('likeOnly', '❤️'),
	},
} satisfies StoryObj<typeof MkNoteDetailed>;
