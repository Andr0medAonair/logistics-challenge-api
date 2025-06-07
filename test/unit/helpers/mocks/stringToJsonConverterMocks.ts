import { UserDataEntry } from 'src/interfaces/user-data-entry.interface';

export const rawPayloadMock: string = `
0000000077                         Mrs. Stephen Trantow00000008450000000003     1672.8920210627
0000000019                                Teresa Brakus00000001980000000002     1182.6920210514
0000000091                                 Loyd D'Amore00000009630000000007      649.5820211217
0000000019                                Teresa Brakus00000001940000000002     1249.8220210918
0000000064                             Quintin Turcotte00000006910000000002      1583.320211109
`;

export const parsedResponseMock: UserDataEntry[] = [
  {
    userId: 77,
    userName: 'Mrs. Stephen Trantow',
    orderId: 845,
    prodId: 3,
    value: 1672.89,
    date: 20210627,
  },
  {
    userId: 19,
    userName: 'Teresa Brakus',
    orderId: 198,
    prodId: 2,
    value: 1182.69,
    date: 20210514,
  },
  {
    userId: 91,
    userName: "Loyd D'Amore",
    orderId: 963,
    prodId: 7,
    value: 649.58,
    date: 20211217,
  },
  {
    userId: 19,
    userName: 'Teresa Brakus',
    orderId: 194,
    prodId: 2,
    value: 1249.82,
    date: 20210918,
  },
  {
    userId: 64,
    userName: 'Quintin Turcotte',
    orderId: 691,
    prodId: 2,
    value: 1583.3,
    date: 20211109,
  },
];
