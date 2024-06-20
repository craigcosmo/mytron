import { writable, type Writable } from 'svelte/store';

export const trackingStore = writable([]);
export const bigTrackingStore = writable([]);
export const scannedTrackStore = writable([]);
export const emailsStore = writable([]);
export const orderStore = writable([]);
export const bigOrderStore = writable([]);
export const buyStore = writable([]);
export const muahangStore = writable([]);
export const addSeriesModalStore = writable(false);
export const searchStore = writable('');
export const editOrderModalStore = writable(false);
export const invoiceModalStore = writable(false);
export const editingOrderStore = writable({});
export const generateSeriesModalStore = writable(false);
export const allProductNameStore = writable([]);
export const productStore = writable([]);
export const currentUser = writable({});
export const allStaffs = writable([]);
export const editAddressModalStore = writable(false);
export const shippingAddressItemStore = writable({});
export const addTrackModalStore = writable(false);
export const addAddressModalStore = writable(false);
export const shippingAddressStore = writable([]);
export const bigShippingAddressStore = writable([]);
export const slideModalStore = writable(false);
export const upLoadedFileStore: Writable<any[] | string> = writable([]);
export const keystrokeTime = writable(0);
export const addEmailStore = writable([]);
export const cartStore = writable([]);
export const originalOrderStore = writable([]);
export const turnOffEditableStore = writable('');
export const deleteConfirmationModalStore = writable(false);
export const globalEditableStore = writable(false);
export const fillSeriesModalStore = writable(false);
export const fillEmailsModalStore = writable(false);
export const usableAddressModalStore = writable(false);
export const showAllAddressModalStore = writable(false);
export const statisticModalStore = writable(false);
export const editUserModalStore = writable(false);
export const uploading = writable(false);
export const editProductModalStore = writable(false);
export const editProductStore = writable({});
export const brandStore = writable(false);
export const categoryStore = writable(false);
export const currentDeletingStore = writable(0);
export const deleteingProductId = writable(0);
export const wrongStatStore = writable({
	email: [],
	address: [],
	series: [],
	tracking: []
});
