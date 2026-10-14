import numpy as np
import matplotlib.pyplot as plt

#ex1
x = np.array([2,5,6,9])
y = np.array([5,3,6,5])

plt.plot(x,y,marker='o')
plt.show()

#ex2
x = np.array([5,8,2,3])
y = np.array([3,6,5,8])

plt.plot(x,y,marker='*',ms=20, mec='r',mfc='r')
plt.show()

#ex3
x = np.array([5,8,2,3])
y = np.array([3,6,5,8])

plt.plot(x,y,'o:r')
plt.show()