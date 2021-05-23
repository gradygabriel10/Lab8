/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from '../scripts/router.js';



 describe('history test', () => {
     test('history that goes to settings', () => {
        const hisLength = history.length;
        pushToHistory('settings', 0);
        expect(history.length).toBe(hisLength + 1);
        expect(history.state).toEqual({'page': 'settings'});
     });
     test('history that goes to entry page', () => {
        const hisLength = history.length;
        pushToHistory('entry', 0);
        expect(history.length).toBe(hisLength + 1);
        expect(history.state).toEqual({'page': `entry${0}`});
     });
     test('history default', () => {
        const hisLength = history.length;
        pushToHistory('', 0);
        expect(history.length).toBe(hisLength + 1);
        expect(history.state).toEqual({});
     });
 });



