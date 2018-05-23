export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export function openModal() {
	return {
		type: OPEN_DIALOG,
	};
}

export function closeModal() {
  return {
    type: CLOSE_DIALOG,
  };
}
