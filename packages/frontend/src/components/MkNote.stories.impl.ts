/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { StoryObj } from '@storybook/vue3';
import { note } from '../../.storybook/fakes';
import MkNote from './MkNote.vue';
export const Default = {
	render(args) {
		return {
			components: {
				MkNote,
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
				},
			},
			template: '<MkNote v-bind="props" />',
		};
	},
	args: {
		note: note(null, undefined),
		pinned: false,
	},
	parameters: {
		layout: 'centered',
	},
} satisfies StoryObj<typeof MkNote>;
export const likeonly = {
	...Default,
	args: {
		...Default.args,
		note: note('likeOnly', undefined),
	},
} satisfies StoryObj<typeof MkNote>;
export const likeonlyWithMyreaction = {
	...Default,
	args: {
		...Default.args,
		note: note('likeOnly', '❤️'),
	},
} satisfies StoryObj<typeof MkNote>;
