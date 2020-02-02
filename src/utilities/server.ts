import { Server } from '../types';
import { AddressInfo } from 'net';

export const getPort = (server: Server): number => {
  return (server.address() as AddressInfo).port;
};
