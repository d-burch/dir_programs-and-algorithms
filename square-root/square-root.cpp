/**
 * David Burch
 * 3-20-23
**/

#include <cstdio>
#include <cfloat>
#include <iostream>
#include <iomanip>
#include <cmath> // Only for base case

using namespace std;

const int squaredNumber = 42;

// 1. Find whole number - Square integers until over 42, then subtract 1
// 2. Shift decimal and do the same for fractions
// 3. Recurse until we hit max precision for double
double squareRoot(double base = 1.0, double fraction = 1.0) {
	if (fraction < pow(10, -DBL_DIG)) {
		return base;
	}

	while ((base * base) <= squaredNumber) {
		base += fraction;
	}

	base -= fraction;
	fraction /= 10;

	return squareRoot(base, fraction);
}

int main() {
	double result = squareRoot();

	cout << setprecision(DBL_DIG) << fixed;
	cout << result << endl;

	return 0;
}
