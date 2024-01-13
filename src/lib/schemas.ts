import { z } from 'zod';
export const _computerSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters long'),
	ip_address: z.string().min(7, 'IP address must be at least 7 characters long').max(15).ip("invalid IP address"),
});
