import { _computerSchema } from '$lib/schemas';
import { superValidate } from 'sveltekit-superforms/client';

export const load = async () => {
	const form = await superValidate(_computerSchema);
	return { form };
};
