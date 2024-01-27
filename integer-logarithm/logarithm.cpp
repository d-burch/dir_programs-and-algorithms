#include <iostream>
using std::cout;
using std::cin;

int logarithm(int base, int num);

int main() {
	int base, num;
	cout << "\nEnter base: ";
	cin >> base;
	cout << "\nEnter number: ";
	cin >> num;

	int result = logarithm(base, num);
	cout << "\nResult is: " << result << "\n";

	return 0;
}

// Rounds result down to nearest integer
// Need to throw exceptions instead of returning an int
int logarithm(int base, int num) {
	if (base <= 1) {
		return -11111;
	}
	if (num <= 0) {
		return -11111;
	}
	int log = 0;
	int total = 1;
	while (total <= num) {
		total *= base;
		log++;
	}
	log -= 1;
	return log;
}
