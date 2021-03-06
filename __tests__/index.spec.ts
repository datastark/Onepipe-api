// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expect } from 'chai'
import OnePipe from '../src'

describe('calc tests', () => {
	describe('sum()', () => {
		context('when it receives "a" = 2 and "b" = 1', () => {
			it('should return 3', () => {
				const response = OnePipe('677', 'gghh')
				const data = response.v2.AccountServices.OpenAccount({
					transaction: {},
					// eslint-disable-next-line @typescript-eslint/camelcase
					request_type: '8792374283',
					// eslint-disable-next-line @typescript-eslint/camelcase
					request_ref: '283828',
					auth: {},
				})

				console.log(data)
			})
		})
	})
})
