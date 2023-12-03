from django.urls import path, include
from rest_framework_nested.routers import DefaultRouter, NestedDefaultRouter
from .views import CategoryViewSet, ProductViewSet, OrderViewSet, OrderItemViewSet

router = DefaultRouter()
router.register('product-categories', CategoryViewSet, basename='product-categories')
router.register('orders', OrderViewSet, basename='orders')

product_router = NestedDefaultRouter(router, 'product-categories', lookup='category')
product_router.register('products', ProductViewSet, basename='category-products')

orderitem_router = NestedDefaultRouter(router, 'orders', lookup='order')
orderitem_router.register('order-items', OrderItemViewSet, basename='order-items')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(product_router.urls)),
]
