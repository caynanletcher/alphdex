from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from cards import views as cards_views
from sets import views as sets_views


router = routers.DefaultRouter()
router.register(r'cards', cards_views.CardViewSet)
router.register(r'sets', sets_views.SetViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),  
]